import React from "react";
import { Header } from "../../../components/Header/Header.js";
import { beforeEach, describe, it } from "jest-circus";
import { shallow } from "enzyme";

jest.mock('../../../components/Header/Header.js', () => ({
    ...jest.requireActual('@material-ui/styles'),
    makeStyles: cb => () => cb({
       spacing: () => 0
    }),
}))

let wrapper = null;

beforeEach(() => {
    wrapper = shallow(<Header />);
});

test("describe Header component", () => {
    it("should render", () => {
        expect(wrapper).toHaveLength(1);;
    });
});
