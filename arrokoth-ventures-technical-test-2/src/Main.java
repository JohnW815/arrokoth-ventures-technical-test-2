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
            if(inputValue.charAt(i) == '(' || inputValue.charAt(i) == '[' || inputValue.charAt(i) == '{'){
                charactersList.add(inputValue.charAt(i));
                isValid = false;
            }

            if(charactersList.size() > 0){

                if(charactersList.get(charactersList.size() - 1) == '('){
                    if(inputValue.charAt(i) == ']' || inputValue.charAt(i) == '}'){
                        isValid = false;
                        break;
                    }
                }else if(charactersList.get(charactersList.size() - 1) == '['){
                    if(inputValue.charAt(i) == ')' || inputValue.charAt(i) == '}'){
                        isValid = false;
                        break;
                    }
                }else if(charactersList.get(charactersList.size() - 1) == '{'){
                    if(inputValue.charAt(i) == ')' || inputValue.charAt(i) == ']'){
                        isValid = false;
                        break;
                    }
                }

                if(charactersList.get(charactersList.size() - 1) == '(' && inputValue.charAt(i) == ')'){
                    charactersList.remove(charactersList.size() - 1);
                }else if(charactersList.get(charactersList.size() - 1) == '[' && inputValue.charAt(i) == ']'){
                    charactersList.remove(charactersList.size() - 1);
                }else if(charactersList.get(charactersList.size() - 1) == '{' && inputValue.charAt(i) == '}'){
                    charactersList.remove(charactersList.size() - 1);
                }
            }

            if(charactersList.size() == 0){
                if(inputValue.charAt(i) == ')' || inputValue.charAt(i) == ']' || inputValue.charAt(i) == '}'){
                    isValid = false;
                    break;
                }else{
                    isValid = true;
                }
            }
        }

        System.out.println(isValid);
    }
}
