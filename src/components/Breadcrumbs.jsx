import React from "react";
import { Breadcrumb, BreadcrumbItem, Container } from "react-bootstrap";

const Breadcrumbs = ({ data }) => {
  return (
    <div>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          {data.map((item, index) => (
            <BreadcrumbItem href={item.url} active={index === data.length - 1}>
              {item.title}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
