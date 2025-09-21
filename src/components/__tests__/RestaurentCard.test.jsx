import { render ,screen} from "@testing-library/react";
import RestaurentCard from "../RestaurentCard";
import MOCK_DATA from "../mocks/resDataMock.json";
import "@testing-library/jest-dom";


it("Should Render RestaurentCard with props Data" , () => {

    render(<RestaurentCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Daily Kitchen - Everyday Homely Meals");

    expect(name).toBeInTheDocument();
});