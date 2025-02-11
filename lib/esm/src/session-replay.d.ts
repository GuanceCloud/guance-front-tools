import type { IncrementalSource as BrowserIncrementalSource, RecordType as BrowserRecordType } from './session-replay-browser';
import type { IncrementalSource as MobileIncrementalSource, RecordType as MobileRecordType } from './session-replay-mobile';
export * from '../generated/sessionReplay';
export { BrowserSource, NodeType, IncrementalSource as BrowserIncrementalSource, MouseInteractionType, MediaInteractionType, } from './session-replay-browser';
export { IncrementalSource as MobileIncrementalSource, MobileSource, WireframeType } from './session-replay-mobile';
export declare const RecordType: {
    BrowserFullSnapshot: typeof BrowserRecordType.FullSnapshot;
    BrowserIncrementalSnapshot: typeof BrowserRecordType.IncrementalSnapshot;
    Meta: typeof BrowserRecordType.Meta;
    Focus: typeof BrowserRecordType.Focus;
    ViewEnd: typeof BrowserRecordType.ViewEnd;
    VisualViewport: typeof BrowserRecordType.VisualViewport;
    FrustrationRecord: typeof BrowserRecordType.FrustrationRecord;
    MobileFullSnapshot: typeof MobileRecordType.FullSnapshot;
    MobileIncrementalSnapshot: typeof MobileRecordType.IncrementalSnapshot;
};
export type RecordType = typeof RecordType[keyof typeof RecordType];
export type IncrementalSource = BrowserIncrementalSource | MobileIncrementalSource;
export declare const PointerEventType: {
    readonly PointerDown: "down";
    readonly PointerUp: "up";
    readonly PointerMove: "move";
};
export type PointerEventType = typeof PointerEventType[keyof typeof PointerEventType];
export declare const PointerType: {
    readonly Mouse: "mouse";
    readonly Touch: "touch";
    readonly Pen: "pen";
};
export type PointerType = typeof PointerType[keyof typeof PointerType];
