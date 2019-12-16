export class FileItem{

    public archivo:File;
    public nombreArchivo:string;
    public url:string;
    public size:number;
    public upload:boolean;
    public progress:number;

    constructor(archivo:File){
        this.archivo=archivo;
        this.nombreArchivo=archivo.name
        this.size=archivo.size;
        this.upload=false
        this.progress=0;
    }
}