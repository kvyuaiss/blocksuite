import type { Slot } from '@blocksuite/global/utils';
import type { BlockModel, Doc } from '@blocksuite/store';

import type { ConnectorElementModel } from '../surface-block/element-model/connector.js';
import type {
  BrushElementModel,
  GroupElementModel,
} from '../surface-block/index.js';
import type { RefNodeSlots } from './inline/presets/nodes/reference-node/reference-node.js';
import type { BlockComponent } from './utils/query.js';
import type { Point } from './utils/rect.js';

export type SelectionPosition = 'start' | 'end' | Point;

export interface IPoint {
  x: number;
  y: number;
}

export interface EditingState {
  element: BlockComponent;
  model: BlockModel;
  rect: DOMRect;
}

/** Common context interface definition for block models. */

export type CommonSlots = RefNodeSlots;

export type DocMode = 'page' | 'edgeless';

type EditorSlots = {
  editorModeSwitched: Slot<DocMode>;
  docUpdated: Slot<{ newDocId: string }>;
};

export type AbstractEditor = {
  doc: Doc;
  mode: DocMode;
  readonly slots: CommonSlots & EditorSlots;
} & HTMLElement;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExtendedModel = BlockModel & Record<string, any>;

export type Connectable = Exclude<
  BlockSuite.EdgelessModelType,
  ConnectorElementModel | BrushElementModel | GroupElementModel
>;

export enum LineWidth {
  Two = 2,
  // Thin
  Four = 4,
  Six = 6,
  Eight = 8,
  // Thick
  Ten = 10,
  Twelve = 12,
}

export enum LassoMode {
  FreeHand,
  Polygonal,
}

export type NoteChildrenFlavour =
  | 'affine:paragraph'
  | 'affine:list'
  | 'affine:code'
  | 'affine:divider'
  | 'affine:database'
  | 'affine:data-view'
  | 'affine:image'
  | 'affine:bookmark'
  | 'affine:attachment'
  | 'affine:surface-ref';

export enum NoteDisplayMode {
  DocAndEdgeless = 'both',
  EdgelessOnly = 'edgeless',
  DocOnly = 'doc',
}

export interface Viewport {
  left: number;
  top: number;
  scrollLeft: number;
  scrollTop: number;
  scrollWidth: number;
  scrollHeight: number;
  clientWidth: number;
  clientHeight: number;
}

export type EmbedCardStyle =
  | 'horizontal'
  | 'horizontalThin'
  | 'list'
  | 'vertical'
  | 'cube'
  | 'cubeThick'
  | 'video'
  | 'figma'
  | 'html'
  | 'syncedDoc';
