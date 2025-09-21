import { render , screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Us Page Test Case", () => {
    // it is alias of test
    it("Should load button us component", () => {

        render(<Contact/>); // It'll be rendered to jsdom
    
        const button =  screen.getByRole("button");
    
        //Assertion 
        expect(button).toBeInTheDocument();    
    
    })
    
    test("Should load two input components", () => {
    
        render(<Contact/>); // It'll be rendered to jsdom
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        //Assertion 
        expect(inputBoxes.length).toBe(2);

        //expect(inputBoxes.length).toBeTruthy(2); - returns false for null,o,undefined...
    
    })
})
