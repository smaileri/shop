import React, { useState } from "react";
import {mutationCreateItem} from './utils/dataHooks'
import {
  Button,

  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,

  Upload,
} from "antd";
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const categories = ["Socks", "Boxers", "Gloves"];
const AddItemForm = () => {
  const [form] = Form.useForm();

  const handleCreateClick = async () => {
    const res = await mutationCreateItem(form.getFieldsValue())
    console.log(res)
  }

  return (
    <>
      <Form
        form={form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 1200,
        }}
      >
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>

        <Form.Item label="Category" name="category">
          <Select>
            {categories.map((category) => (
              <Select.Option key={category} value={category}>
                {category}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[
            {
              type: "integer",
              message: "Please enter a valid integer for the quantity.",
            },
            {
              required: true,
              message: "Please enter the quantity.",
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item label="Price" name="price">
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <TextArea rows={4} />
        </Form.Item>

        {/* <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item> */}
      </Form>
      <Button onClick={handleCreateClick}> Create </Button>
    </>
  );
};
export default AddItemForm;
