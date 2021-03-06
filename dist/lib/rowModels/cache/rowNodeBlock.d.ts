// Type definitions for ag-grid v11.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { NumberSequence } from "../../utils";
import { RowNode } from "../../entities/rowNode";
import { Context } from "../../context/context";
import { BeanStub } from "../../context/beanStub";
import { RowNodeCacheParams } from "./rowNodeCache";
import { RowRenderer } from "../../rendering/rowRenderer";
export interface RowNodeBlockBeans {
    context: Context;
    rowRenderer: RowRenderer;
}
export declare abstract class RowNodeBlock extends BeanStub {
    static EVENT_LOAD_COMPLETE: string;
    static STATE_DIRTY: string;
    static STATE_LOADING: string;
    static STATE_LOADED: string;
    static STATE_FAILED: string;
    private version;
    private state;
    private lastAccessed;
    private blockNumber;
    private startRow;
    private endRow;
    private rowNodes;
    private beans;
    private rowNodeCacheParams;
    protected abstract loadFromDatasource(): void;
    protected abstract setDataAndId(rowNode: RowNode, data: any, index: number): void;
    abstract getRow(displayIndex: number): RowNode;
    abstract getNodeIdPrefix(): string;
    constructor(blockNumber: number, rowNodeCacheParams: RowNodeCacheParams);
    isAnyNodeOpen(rowCount: number): boolean;
    private forEachNodeCallback(callback, rowCount);
    private forEachNode(callback, sequence, rowCount, deep);
    forEachNodeDeep(callback: (rowNode: RowNode, index: number) => void, sequence: NumberSequence, rowCount: number): void;
    forEachNodeShallow(callback: (rowNode: RowNode, index: number) => void, sequence: NumberSequence, rowCount: number): void;
    getVersion(): number;
    getLastAccessed(): number;
    getRowUsingLocalIndex(rowIndex: number): RowNode;
    protected init(beans: RowNodeBlockBeans): void;
    getStartRow(): number;
    getEndRow(): number;
    getPageNumber(): number;
    setDirty(): void;
    setDirtyAndPurge(): void;
    getState(): string;
    setRowNode(rowIndex: number, rowNode: RowNode): void;
    setBlankRowNode(rowIndex: number): RowNode;
    setNewData(rowIndex: number, dataItem: any): RowNode;
    protected createBlankRowNode(rowIndex: number): RowNode;
    protected createRowNodes(): void;
    load(): void;
    protected pageLoadFailed(): void;
    private populateWithRowData(rows);
    destroy(): void;
    protected pageLoaded(version: number, rows: any[], lastRow: number): void;
}
