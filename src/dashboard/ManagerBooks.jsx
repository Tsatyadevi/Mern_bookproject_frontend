import React from 'react';
import { Table } from "flowbite-react";

const ManagerBooks = () => {
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Product Name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Edit</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-gray-50 dark:bg-gray-800">
            <Table.Cell>01</Table.Cell>
            <Table.Cell>Apple MacBook Pro 17</Table.Cell>
            <Table.Cell>Silver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-100 dark:bg-gray-800">
            <Table.Cell>02</Table.Cell>
            <Table.Cell>Microsoft Surface Pro</Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-gray-50 dark:bg-gray-800">
            <Table.Cell>03</Table.Cell>
            <Table.Cell>Magic Mouse 2</Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default ManagerBooks;
