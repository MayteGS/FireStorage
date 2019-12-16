import { Directive, HostListener, Output , EventEmitter, Input } from '@angular/core';
import { FileItem } from '../models/file.item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  constructor() { }

  @Input() archivosUpload:Array<FileItem>=[]

  @Output() mouseOnElement: EventEmitter<boolean>= new EventEmitter();

  // public archivosUpload:Array<FileItem>=[]

  @HostListener('dragover',['$event'])
  public onDragEnter(event:Event){
    this.mouseOnElement.emit(true)
    this._prevenirDefault(event)
  }

  @HostListener('dragleave',['$event'])
  public onDragOut(event:Event){
    this.mouseOnElement.emit(false)
    this._prevenirDefault(event)
  }

  @HostListener('drop',['$event'])
  public onDrop(event){

    const FileTransfer=event.dataTransfer;

    this._extraerArchivo(FileTransfer.files);

    // console.log(FileTransfer);
    

    this._prevenirDefault(event);
  }

  private _extraerArchivo(archivoLista:FileList){
    // console.log(archivoLista);
    console.log(Object.getOwnPropertyNames(archivoLista));
    
    for(const propiedad in Object.getOwnPropertyNames(archivoLista)){
      
      const archivoTemporal=archivoLista[propiedad]
      const nuevoArchivo= new FileItem(archivoTemporal)

      this.archivosUpload.push(nuevoArchivo)
      console.log(this.archivosUpload);
      
      
    }
    

  }

  private _prevenirDefault(event:Event){
    event.preventDefault();
    event.stopPropagation();

  }
}
