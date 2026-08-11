import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

const ROOT = 'E:/workSpace/qinglbot';
const SKIP = ['node_modules', '.next', 'dist', '.git', '.nx'];

function walk(dir, results = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP.includes(name)) continue;
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, results);
    else if (/\.(ts|tsx|mjs|js)$/.test(name)) results.push(p);
  }
  return results;
}

const files = walk(ROOT);
const stripeImport = new Set();
const stripeEnv = new Set();
const billingUI = new Set();

for (const f of files) {
  const c = readFileSync(f, 'utf8');
  if (/from\s+['"]stripe['"]/.test(c)) stripeImport.add(f);
  if (/env\.STRIPE_|STRIPE_SECRET_KEY|STRIPE_WEBHOOK_SECRET|STRIPE_PUBLIC_KEY|STRIPE_STARTER|STRIPE_PRO|NEXT_PUBLIC_STRIPE/.test(c)) stripeEnv.add(f);
  if (/useBilling|billingRouter|UpgradeButton|ChangePlan|BillingPortal|PricingCard|PlanTag|hasProPerks|isFreePlan|InvoicesList|getSubscription|getUsage|createCheckoutSession|updateSubscription/.test(c)) {
    billingUI.add(f);
  }
}

console.log('=== imports stripe pkg (' + stripeImport.size + ') ===');
[...stripeImport].forEach(f => console.log(f));
console.log('');
console.log('=== uses STRIPE_* env (' + stripeEnv.size + ') ===');
[...stripeEnv].forEach(f => console.log(f));
console.log('');
console.log('=== uses billing UI/router (' + billingUI.size + ') ===');
[...billingUI].sort().forEach(f => console.log(f));
