import React from "react";
import SectionBasics from "../../../views/Components/Sections/SectionBasics.js";
import { beforeEach, it, test } from "jest-circus";
import { shallow } from "enzyme";

jest.mock('../../../views/Components/Sections/SectionBasics.js', () => ({
    ...jest.requireActual('@material-ui/styles'),
    makeStyles: cb => () => cb({
       spacing: () => 0
    }),
}))

let wrapper = null;

beforeEach(() => {
    wrapper = shallow(<SectionBasics />);
});

test("renders", () => {expect(wrapper)});