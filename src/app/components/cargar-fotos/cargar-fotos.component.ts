import { Component, OnInit, OnChanges } from '@angular/core';
import { FileItem } from '../../models/file.item';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-cargar-fotos',
  templateUrl: './cargar-fotos.component.html',
  styles: []
})
export class CargarFotosComponent {

  public onElement:boolean=false;

  public ArchivosPadre:FileItem[]=[];

  constructor(private _uploadService:UploadService){}

  GuardarImagenes(){
    this._uploadService.UploadsFiles(this.ArchivosPadre)
  }

}
