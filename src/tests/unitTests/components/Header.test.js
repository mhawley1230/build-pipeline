import React from "react";
import { Header } from "../../../components/Header/Header.js";
import { beforeEach, describe, it } from "jest-circus";
import { shallow } from "enzyme";

jest.mock("../../../components/Header/Header.js", () => ({
    ...jest.requireActual('@material-ui/styles'),
    makeStyles: cb => () => cb({
       spacing: () => 0
    }),
}))

let wrapper = null;

beforeEach(() => {
    wrapper = shallow(<Header />);
});

test("Header component", () => {
    it("should render", () => {
        expect(wrapper.find(AppBar)).toHaveLength(1);
    });
});

describe("has elements", () => {
    test("an appBar element", () => {
        it("renders successfully", () => {
            expect(wrapper.find('.appBarClasses').to.equal(true));
        });
    });
    
    test("an Toolbar element", () => {
        it("renders successfully", () => {
            expect(wrapper.find('.classes.container').to.equal(true));
        });
    });

    test("a dropdown menu", () => {
        it("renders successfully", () => {
            expect(wrapper.find('.MuiSvgIcon-root').to.equal(true));
        });
    });

    test("a Parallax component", () => {
        it("renders successfully", () => {
            expect(wrapper.find('image').to.equal(true));
        });
        it("requires the correct image", () => {
            expect(wrapper.find('image').to.haveValue("require(\"assets/img/bg4.jpg\""));
        });
    });
});