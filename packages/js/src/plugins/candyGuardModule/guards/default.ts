import { Option } from '@/utils';
import { AllowListGuardSettings } from './allowList';
import { BotTaxGuardSettings } from './botTax';
import { CandyGuardsSettings } from './core';
import { EndSettingsGuardSettings } from './endSettings';
import { GatekeeperGuardSettings } from './gatekeeper';
import { LamportsGuardSettings } from './lamports';
import { LiveDateGuardSettings } from './liveDate';
import { MintLimitGuardSettings } from './mintLimit';
import { SplTokenGuardSettings } from './splToken';
import { ThirdPartySignerGuardSettings } from './thirdPartySigner';
import { WhitelistGuardSettings } from './whitelist';

export type DefaultCandyGuardSettings = CandyGuardsSettings & {
  botTax: Option<BotTaxGuardSettings>;
  liveDate: Option<LiveDateGuardSettings>;
  lamports: Option<LamportsGuardSettings>;
  splToken: Option<SplTokenGuardSettings>;
  thirdPartySigner: Option<ThirdPartySignerGuardSettings>;
  whitelist: Option<WhitelistGuardSettings>;
  gatekeeper: Option<GatekeeperGuardSettings>;
  endSettings: Option<EndSettingsGuardSettings>;
  allowList: Option<AllowListGuardSettings>;
  mintLimit: Option<MintLimitGuardSettings>;
};

/** @internal */
export const defaultCandyGuardNames: string[] = [
  'botTax',
  'liveDate',
  'lamports',
  'splToken',
  'thirdPartySigner',
  'whitelist',
  'gatekeeper',
  'endSettings',
  'allowList',
  'mintLimit',
];

/** @internal */
export const emptyDefaultCandyGuardSettings: {
  [key in keyof DefaultCandyGuardSettings]: null;
} = defaultCandyGuardNames.reduce((acc, name) => {
  acc[name] = null;
  return acc;
}, {} as { [key in keyof DefaultCandyGuardSettings]: null });
