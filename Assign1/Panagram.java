package program;

import java.util.HashSet;
import java.util.Scanner;


public class Panagram {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence : ");
        String input = scanner.nextLine();
        scanner.close();

        if (isPangram(input)) {
            System.out.println("It's a pangram!");
        } else {
            System.out.println("It's not a pangram.");
        }
    

	}
	 public static boolean isPangram(String input) {
	        
	        HashSet<Character> alphabetSet = new HashSet<>();

	        
	        input = input.toLowerCase();

	       
	        for (int i = 0; i < input.length(); i++) {
	            char c = input.charAt(i);

	           
	            if (c >= 'a' && c <= 'z') {
	                alphabetSet.add(c);
	            }
	        }

	        return alphabetSet.size() == 26;
	    }
	

}
