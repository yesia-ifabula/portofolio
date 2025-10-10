import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductItem from "./ProductItem";
import '@testing-library/jest-dom';

describe("ProductItem", () => {
  const props = {
    image: "/home.svg",
    title: "Project 1",
    description: "Deskripsi singkat Project 1",
  };

  it("menampilkan judul produk", () => {
    render(<ProductItem {...props} />);
    expect(screen.getByText("Project 1")).toBeInTheDocument();
  });

  it("menampilkan deskripsi saat hover", () => {
    render(<ProductItem {...props} />);
    const item = screen.getByText("Project 1").closest("div")!;
    expect(screen.queryByText(props.description)).not.toBeInTheDocument();
    fireEvent.mouseEnter(item);
    expect(screen.getByText(props.description)).toBeInTheDocument();
    fireEvent.mouseLeave(item);
    expect(screen.queryByText(props.description)).not.toBeInTheDocument();
  });
});