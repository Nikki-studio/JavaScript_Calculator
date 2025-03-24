
/* Copyright 2025 Joseph Wangai Mwaniki
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let String = '';
function calculator(FirstString){
    String += FirstString;
    //console.log(String);
    document.getElementById('in').value = String;
}
function backspace() {
    String= String.slice(0,String.length-1);
    document.getElementById('in').value = String;
    
}
let Answer="";
let History="";
function execute(){
    try{
    Answer = eval(String);
    }catch(error){
        Answer="Error."
    }
    document.getElementById('out').value = Answer;
    History = String + " = " + Answer+"<br>";
    document.getElementById('history').innerHTML+=History;
    
}
function Save(){
    document.getElementById('Safe').style.width = 0;
    document.getElementById('Safe').style.height = 0;
    print();
    window.location.reload();
}