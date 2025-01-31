function storageCheck(){
    if (typeof(Storage) !=="undifined"){        
        
        alert("Your Web browser can store data in local and session storage");

    }
    else{
        alert("Sorry! No Web Storage Support...");
    }
}
function saveData(){
    const Authorname= document.getElementById('AuthorName').value;
    const Email= document.getElementById('Email').value;
    
    storageCheck();

    localStorage.setItem('AuthorName', Authorname);
    localStorage.setItem('Email', Email);

    const PageCount= document.getElementById("pagecount").value;
    const BookT=document.getElementById('BookTitle').value;

    sessionStorage.setItem('BookTitle', BookT);
    sessionStorage.setItem('pagecount',PageCount);


}

document.getElementById('savebtn').addEventListener('click',saveData,storageCheck)

function FetchData(){
    const AuthorName = localStorage.getItem('AuthorName');
    const Email = localStorage.getItem('Email');
    const BookTitle = sessionStorage.getItem('BookTitle');
    const PageCount = sessionStorage.getItem('pagecount');

    document.getElementById('AuthorName').value=AuthorName;
    document.getElementById('Email').value=Email;
    document.getElementById('BookTitle').value=BookTitle;
    document.getElementById('pagecount').value=PageCount;

    if(BookTitle){
        document.getElementById('H2').innerHTML= "Welcom back to the writer's desk "+ AuthorName +". How is your work on " + BookTitle + " going?";
    }


}
document.getElementById('fetchbtn').addEventListener('click',FetchData)

