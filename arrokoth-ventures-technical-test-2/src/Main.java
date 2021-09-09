import java.util.Scanner;
import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        String inputValue;
        ArrayList<Character> charactersList = new ArrayList<Character>();
        boolean isValid = true;

        Scanner inputObj = new Scanner(System.in);
        System.out.println("Enter value");

        inputValue = inputObj.nextLine();

        for(int i = 0; i < inputValue.length(); i++){

            if(charactersList.size() == 0){
                if(inputValue.charAt(i) == ')' || inputValue.charAt(i) == ']' || inputValue.charAt(i) == '}'){
                    isValid = false;
                    break;
                }
            }

            if(inputValue.charAt(i) == '(' || inputValue.charAt(i) == '[' || inputValue.charAt(i) == '{'){
                charactersList.add(inputValue.charAt(i));
            }

            if(charactersList.size() > 0){

                isValid = false;

                if(charactersList.get(charactersList.size() - 1) == '('){
                    if(inputValue.charAt(i) == ']' || inputValue.charAt(i) == '}'){
                        break;
                    }
                }else if(charactersList.get(charactersList.size() - 1) == '['){
                    if(inputValue.charAt(i) == ')' || inputValue.charAt(i) == '}'){
                        break;
                    }
                }else if(charactersList.get(charactersList.size() - 1) == '{'){
                    if(inputValue.charAt(i) == ')' || inputValue.charAt(i) == ']'){
                        break;
                    }
                }

                if(charactersList.get(charactersList.size() - 1) == '(' && inputValue.charAt(i) == ')'){
                    charactersList.remove(charactersList.size() - 1);
                    isValid = true;
                }else if(charactersList.get(charactersList.size() - 1) == '[' && inputValue.charAt(i) == ']'){
                    charactersList.remove(charactersList.size() - 1);
                    isValid = true;
                }else if(charactersList.get(charactersList.size() - 1) == '{' && inputValue.charAt(i) == '}'){
                    charactersList.remove(charactersList.size() - 1);
                    isValid = true;
                }
            }

        }
        System.out.println(isValid);
    }
}
