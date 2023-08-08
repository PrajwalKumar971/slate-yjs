import { Editor, Operation } from 'slate';
import * as Y from 'yjs';
/**
 * Translate a yjs event into slate operations. The editor state has to match the
 * yText state before the event occurred.
 *
 * @param sharedType
 * @param op
 */
export declare function translateYjsEvent(sharedRoot: Y.XmlText, editor: Editor, event: Y.YEvent<Y.XmlText>): Operation[];
/**
 * Translates yjs events into slate operations and applies them to the editor. The
 * editor state has to match the yText state before the events occurred.
 *
 * @param sharedRoot
 * @param editor
 * @param events
 */
export declare function applyYjsEvents(sharedRoot: Y.XmlText, editor: Editor, events: Y.YEvent<Y.XmlText>[]): void;
//# sourceMappingURL=index.d.ts.map