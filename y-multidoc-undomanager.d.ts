/**
 * @extends Observable<any>
 */
export class YMultiDocUndoManager extends Observable<any> {
    /**
     * @param {Y.AbstractType<any>|Array<Y.AbstractType<any>>} typeScope Accepts either a single type, or an array of types
     * @param {ConstructorParameters<typeof Y.UndoManager>[1]} opts
     */
    constructor(typeScope?: Y.AbstractType<any> | Array<Y.AbstractType<any>>, opts?: [Y.AbstractType<any> | Y.AbstractType<any>[], (import("yjs/dist/src/internals").UndoManagerOptions | undefined)?][1]);
    /**
     * @type {Map<Y.Doc, Y.UndoManager>}
     */
    docs: Map<Y.Doc, Y.UndoManager>;
    trackedOrigins: Set<any>;
    _defaultOpts: import("yjs/dist/src/internals").UndoManagerOptions;
    /**
     * @type {Array<Y.UndoManager>}
     */
    undoStack: Array<Y.UndoManager>;
    /**
     * @type {Array<Y.UndoManager>}
     */
    redoStack: Array<Y.UndoManager>;
    /**
     * @param {Array<Y.AbstractType<any>> | Y.AbstractType<any>} ytypes
     */
    addToScope(ytypes: Array<Y.AbstractType<any>> | Y.AbstractType<any>): void;
    /**
     * @param {any} origin
     */
    addTrackedOrigin(origin: any): void;
    /**
     * @param {any} origin
     */
    removeTrackedOrigin(origin: any): void;
    /**
     * Undo last changes on type.
     *
     * @return {any?} Returns StackItem if a change was applied
     */
    undo(): any | null;
    /**
     * Redo last undo operation.
     *
     * @return {any?} Returns StackItem if a change was applied
     */
    redo(): any | null;
    clear(clearUndoStack?: boolean, clearRedoStack?: boolean): void;
    stopCapturing(): void;
    /**
     * Are undo steps available?
     *
     * @return {boolean} `true` if undo is possible
     */
    canUndo(): boolean;
    /**
     * Are redo steps available?
     *
     * @return {boolean} `true` if redo is possible
     */
    canRedo(): boolean;
}
/**
 * @todo remove
 * @deprecated Use YMultiDocUndoManager instead
 */
export const MultiDocUndoManager: typeof YMultiDocUndoManager;
import { Observable } from 'lib0/observable';
import * as Y from 'yjs';
//# sourceMappingURL=y-multidoc-undomanager.d.ts.map