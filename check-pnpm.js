console.log('Running preinstall script...');
console.log('📝 User Agent:', process.env.npm_config_user_agent);

const userAgent = process.env.npm_config_user_agent || '';

if (!userAgent.includes('pnpm')) {
  console.error(
    '\x1b[31m%s\x1b[0m',
    '❌ ERROR: This project requires pnpm. Please use pnpm instead of npm or yarn.',
  );
  process.exit(1);
}

console.log('Preinstall script passed.');
