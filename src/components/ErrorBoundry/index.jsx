"use client";
import React, { Component } from 'react';
import ErrorFallback from '../ErrorFallback';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) return <ErrorFallback />;
        return this.props.children;
    }
}

export default ErrorBoundary;
