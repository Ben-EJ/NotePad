import { Component } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.NotePadHome.html',
  styleUrls: ['./app.NotePadHomeCSS.css']
})
export class NotePad {
  title = 'NotePad';

  storedDataList : string[] = [];// Current files in local storage.

  currentlyOpenFileName : string = "";
  currentlyOpenFile : string = "";
  
  changesFlag : boolean = false;
  savedText : string = "Not Saved";

  // Controls what happends when the user saves a file.
  onSave(docTitle:string, notes:string){
    if(docTitle != ""){// Ensures file name is not left empty.
      if(docTitle != this.currentlyOpenFileName){// Check to see if you are changing a file name.
        localStorage.removeItem(this.currentlyOpenFileName);// If so remove the file so it can be re-created.
        this.currentlyOpenFileName = docTitle;// Update currently open file name to new file name.
      }
      this.savedText = "Saved!";
      this.changesFlag = false;
      localStorage.setItem(docTitle,notes);// Save file to local storage.
    }else{
      confirm("Please enter a file name")
    }
  }
  clear(){
    this.currentlyOpenFile = "";
    document.getElementsByTagName("textarea")[0].value = "";// Clears text area.
    this.currentlyOpenFileName = "";
    this.savedText = "Not Saved";
    this.changesFlag = false;
  }
  // Function controls what happends when a user clicks the new file button.
  onNew(){
    if(this.changesFlag == true){// If changes have been made to current document.
      if(confirm("Would you like to save your changes?")){//Alert user
        this.onSave(this.currentlyOpenFileName,this.currentlyOpenFile);// Save file if accepted.
        this.clear();// Clear notes box and note name.
      }else{
        this.clear();// Clear notes box and note name.
      }
      
    }else{
      this.clear();// Clear notes box and note name.
    }
  }
  onDelete(){
    if(this.currentlyOpenFileName != ""){// Ensures a file is open
      localStorage.removeItem(this.currentlyOpenFileName);
      this.clear();
    }
  }
  // When the user types something in either the notes box or note name box, show changes have not been saved.
  updateOnEdit(){
    this.savedText = "Not Saved";
    this.changesFlag = true;
  }
  // Open file from local storage.
  onOpen(toOpen:string){
    this.currentlyOpenFileName = toOpen;
    document.getElementsByTagName("textarea")[0].value = localStorage.getItem(toOpen)!;// Update textarea with opened files contents.
    this.currentlyOpenFile = localStorage.getItem(toOpen)!;

    this.savedText = "Saved";
  }
  // Update dropdown box with files from local storage.
  updateDropdown(){
    let localStorageDocTitles : string[]= [];
    for(let i = 0; i < localStorage.length; i++){
      localStorageDocTitles.push(localStorage.key(i)!);
    }
    this.storedDataList = localStorageDocTitles;
  }
}