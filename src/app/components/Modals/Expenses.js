import React from 'react'
import { Modal, Form, Input, DatePicker, Button } from 'antd'


function Expenses({ isExpenseVisible, handleExpenseCancel, onFinish }) {
    const [form] = Form.useForm();
    return (
        <Modal style={{ fontWeight: 600 }} title="Add Expenses" visible={isExpenseVisible} onCancel={handleExpenseCancel} footer={null}>
            <Form className='form_style' form={form} onFinish={(values) => {
                onFinish(values, "Expenses");
                form.resetFields();
            }}>
                <Form.Item label="Expenses Name" name="expneses" rules={[{
                    required: true,
                    message: "Please add expenses name"
                }]}>
                    <Input type="text" className="inputStyle" />
                </Form.Item>
                <Form.Item label="Amount" name="amount" rules={[{
                    required: true,
                    message: "Please add amount!"
                }]}>
                    <Input type="number" className="inputStyle" />
                </Form.Item>
                <Form.Item label="Date" name="date" rules={[{
                    required: true,
                    message: "Please select date!"
                }]}>
                    <DatePicker format="YYYY-MM-DD" />
                </Form.Item>
                <div className="button_container">
                    <Button type='primary' className='submit_btn' htmlType="submit">Submit</Button>
                </div>
            </Form>
        </Modal>
    )
}

export default Expenses