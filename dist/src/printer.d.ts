/**
 * Interface that can print a table of data. Allows Node or browser strategies.
 */
export interface IOutputProvider {
    printData(data: string[][]): void;
}
/**
 * NodeJS implementation that prints tables to the console.
 */
export declare class NodeOutputProvider implements IOutputProvider {
    printData(data: string[][]): void;
}
