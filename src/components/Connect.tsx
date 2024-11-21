'use client';

import React, { useState } from 'react';
import { Flex, Input, Button } from '@/once-ui/components';

interface ConnectProps {
    connect: {
        formFields: {
            name: {
                required: boolean;
                placeholder: string;
            };
            email: {
                required: boolean;
                placeholder: string;
            };
            message: {
                required: boolean;
                placeholder: string;
            };
        };
    };
}

export function Connect({ connect }: ConnectProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', { name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Flex direction="column" gap="16">
                <Input
                    id="name"
                    label="Name"
                    type="text"
                    placeholder={connect.formFields.name.placeholder}
                    required={connect.formFields.name.required}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    id="email"
                    label="Email"
                    type="email"
                    placeholder={connect.formFields.email.placeholder}
                    required={connect.formFields.email.required}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                  <Input
                    id="message"
                    label="Message"
                    type="text"
                    placeholder={connect.formFields.message.placeholder}
                    required={connect.formFields.message.required}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button type="submit" variant="primary">
                    Send Message
                </Button>
            </Flex>
        </form>
    );
}