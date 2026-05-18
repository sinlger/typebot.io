import { Link, useLocation } from "@tanstack/react-router";
import { Button } from "@typebot.io/ui/components/Button";
import { Cancel01Icon } from "@typebot.io/ui/icons/Cancel01Icon";
import { Menu01Icon } from "@typebot.io/ui/icons/Menu01Icon";
import { cn } from "@typebot.io/ui/lib/cn";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { TypebotLogoFull } from "@/components/TypebotLogo";
import {
  dashboardUrl,
  registerUrl,
  signinUrl,
} from "@/constants";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";
import { ButtonLink, CtaButtonLink } from "./link";

const navLinks = [
  { label: "首页", to: "/" },
  { label: "模板", to: "/templates" },
  { label: "定价", to: "/pricing" },
  { label: "关于", to: "/about" },
] as const;

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <TypebotLogoFull />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
            >
              {mobileMenuOpen ? <Cancel01Icon /> : <Menu01Icon />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

const DesktopNav = () => {
  const isAuthenticated = useIsAuthenticated();
  const { pathname } = useLocation();

  return (
    <div className="hidden md:flex md:items-center md:gap-8">
      <nav className="flex items-center gap-1">
        {navLinks.map((link) => (
          <ButtonLink
            key={link.label}
            to={link.to}
            variant="ghost"
            size="sm"
            className={cn(
              "text-gray-600 hover:text-orange-600",
              pathname === link.to &&
                "bg-orange-50 text-orange-600 font-medium hover:bg-orange-100 hover:text-orange-700"
            )}
          >
            {link.label}
          </ButtonLink>
        ))}
      </nav>

      <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
        {!isAuthenticated && (
          <ButtonLink
            href={signinUrl}
            variant="outline"
            size="sm"
            className="border-orange-200 bg-orange-50 text-orange-700 hover:border-orange-300 hover:bg-orange-100 hover:text-orange-800"
          >
            登录
          </ButtonLink>
        )}
        {isAuthenticated ? (
          <CtaButtonLink size="sm" href={dashboardUrl}>
            进入工作台
          </CtaButtonLink>
        ) : (
          <CtaButtonLink size="sm" href={registerUrl}>
            免费开始使用
          </CtaButtonLink>
        )}
      </div>
    </div>
  );
};

const MobileNav = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <ButtonLink
                key={link.label}
                to={link.to}
                variant="ghost"
                className="w-full justify-start text-gray-600 hover:bg-orange-50 hover:text-orange-700"
                onClick={onClose}
              >
                {link.label}
              </ButtonLink>
            ))}
            <div className="pt-4 border-t border-gray-100 mt-4 space-y-2">
              {!isAuthenticated && (
                <ButtonLink
                  href={signinUrl}
                  variant="outline"
                  className="w-full border-orange-200 bg-orange-50 text-orange-700 hover:border-orange-300 hover:bg-orange-100 hover:text-orange-800"
                >
                  登录
                </ButtonLink>
              )}
              {isAuthenticated ? (
                <CtaButtonLink href={dashboardUrl} className="w-full">
                  进入工作台
                </CtaButtonLink>
              ) : (
                <CtaButtonLink href={registerUrl} className="w-full">
                  免费开始使用
                </CtaButtonLink>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
