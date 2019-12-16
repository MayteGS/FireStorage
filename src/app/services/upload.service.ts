import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage'
import { FileItem } from '../models/file.item';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private AFStorage:AngularFireStorage) { }

  public UploadsFiles(Archivos:FileItem[]){

   for(const archivo of Archivos){

    const file=archivo.archivo;
    const filepath:string=`img/${archivo.nombreArchivo}`

    const task=this.AFStorage.upload(filepath,file)

    task.percentageChanges().subscribe(percentage=>archivo.progress=percentage)
   }
    
  }
}
