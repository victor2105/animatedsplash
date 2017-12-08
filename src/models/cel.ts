export interface Cel {
    key? : string;
    parent: string;
    name: string;
    value: number;
    function: string;
    check: boolean;
    children?: Cel[];
    listeners?: Cel[];
}