package com.company;
import java.util.Scanner;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        Scanner inputObj = new Scanner(System.in);

        String value;
        ArrayList<Character> characterList = new ArrayList<Character>();
        boolean stringVaild = true;

        System.out.println("Please enter value");
        value = inputObj.nextLine();

        System.out.println(value);

        for(int i = 0;i < value.length(); i++){
            if(value.charAt(i) == '(' || value.charAt(i) == '[' || value.charAt(i) == '{'){
                characterList.add(value.charAt(i));
                stringVaild = false;
            }

            if(characterList.size() > 0){

                if(characterList.get(characterList.size() - 1) == '('){
                    if(value.charAt(i) == ']' || value.charAt(i) == '}'){
                        stringVaild = false;
                        break;
                    }
                }else if(characterList.get(characterList.size() - 1) == '['){
                    if(value.charAt(i) == ')' || value.charAt(i) == '}'){
                        stringVaild = false;
                        break;
                    }
                }else if(characterList.get(characterList.size() - 1) == '{'){
                    if(value.charAt(i) == ')' || value.charAt(i) == ']'){
                        stringVaild = false;
                        break;
                    }
                }

                if(characterList.get(characterList.size() - 1) == '(' && value.charAt(i) == ')'){
                    stringVaild = true;
                    characterList.remove(characterList.size() - 1);
                }else if(characterList.get(characterList.size() - 1) == '[' && value.charAt(i) == ']'){
                    stringVaild = true;
                    characterList.remove(characterList.size() - 1);
                }else if(characterList.get(characterList.size() - 1) == '{' && value.charAt(i) == '}'){
                    stringVaild = true;
                    characterList.remove(characterList.size() - 1);
                }
            }
        }

        System.out.println(stringVaild);
    }
}
