import { MAX_REACTIONS_PER_SESSION } from '@/constants/app';

import type { TContentMetaDetail } from '@/types';

export type ReactionsState = {
  clapping: number;
  thinking: number;
  amazed: number;
  shares: number;
  clappingQuota: number;
  thinkingQuota: number;
  amazedQuota: number;
};

export enum ReactionsActions {
  INCREASE_CLAPPING,
  INCREASE_THINKING,
  INCREASE_AMAZED,
  INCREASE_SHARES,
  DECREASE_CLAPPING_QUOTA,
  DECREASE_THINKING_QUOTA,
  DECREASE_AMAZED_QUOTA,
}

export type ReactionsAction = {
  type: ReactionsActions;
};

export type ReactionsInitializer = Pick<
  TContentMetaDetail,
  'meta' | 'metaUser'
>;

export function reducer(
  state: ReactionsState,
  action: ReactionsAction
): ReactionsState {
  switch (action.type) {
    case ReactionsActions.INCREASE_CLAPPING:
      return {
        ...state,
        clapping: state.clapping + 1,
      };
    case ReactionsActions.INCREASE_THINKING:
      return {
        ...state,
        thinking: state.thinking + 1,
      };
    case ReactionsActions.INCREASE_AMAZED:
      return {
        ...state,
        amazed: state.amazed + 1,
      };
    case ReactionsActions.INCREASE_SHARES:
      return {
        ...state,
        shares: state.shares + 1,
      };
    case ReactionsActions.DECREASE_CLAPPING_QUOTA:
      return {
        ...state,
        clappingQuota: state.clappingQuota - 1,
      };
    case ReactionsActions.DECREASE_THINKING_QUOTA:
      return {
        ...state,
        thinkingQuota: state.thinkingQuota - 1,
      };
    case ReactionsActions.DECREASE_AMAZED_QUOTA:
      return {
        ...state,
        amazedQuota: state.amazedQuota - 1,
      };
    default:
      throw Error(`Unknown action: ${action.type}`);
  }
}

export function createInitialState({
  meta,
  metaUser,
}: ReactionsInitializer): ReactionsState {
  const { CLAPPING, THINKING, AMAZED } = meta.reactionsDetail;
  const USER = metaUser.reactionsDetail;

  return {
    clapping: CLAPPING,
    thinking: THINKING,
    amazed: AMAZED,
    shares: meta.shares,
    clappingQuota: MAX_REACTIONS_PER_SESSION - USER.CLAPPING,
    thinkingQuota: MAX_REACTIONS_PER_SESSION - USER.THINKING,
    amazedQuota: MAX_REACTIONS_PER_SESSION - USER.AMAZED,
  };
}
