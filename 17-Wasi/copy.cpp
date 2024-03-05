#include <iostream>
#include <fstream> 

using namespace std; 
  
int main() 
{ 
    string line;
    
    ifstream infile("copy.cpp");
    ofstream outfile("copy.txt");

    if( infile && outfile ) { 
        while (getline(infile, line)) { 
            outfile << line << "\n"; 
        } 
        cout << "Done\n"; 
    } 
    else { 
        printf("File is not readable"); 
    } 
    infile.close(); 
    outfile.close(); 
    return 0; 
}
