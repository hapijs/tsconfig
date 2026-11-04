// Each @ts-expect-error relies on an option of the shared config, so dropping it fails with TS2578.

// @ts-expect-error verbatimModuleSyntax
import { Shape } from './shape.js';

const list: string[] = [];

// @ts-expect-error noUncheckedIndexedAccess
export const first: string = list[0];

// @ts-expect-error exactOptionalPropertyTypes
export const shape: Shape = { name: undefined };

// @ts-expect-error erasableSyntaxOnly
export enum Mode {
    On,
}

// @ts-expect-error noImplicitReturns
export const partial = (flag: boolean): number | undefined => {
    if (flag) {
        return 1;
    }
};

export const unused = (): void => {
    // @ts-expect-error noUnusedLocals
    const local = 1;
};
