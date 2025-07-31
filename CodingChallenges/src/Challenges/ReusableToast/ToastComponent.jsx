import React, { useState } from "react";

export default function ToastComponent() {
    const [toasts, setToasts] = useState([]);

    const showToast = (message, type = "info", duration = 5000) => {
        const id = Date.now();

        setToasts((prevToasts) => [...prevToasts, { id, message, type }]);

        setTimeout(() => {
            setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
        }, duration);
    };

    const toastStyles = {
        container: {
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 1000,
        },
        toast: {
            marginBottom: "10px",
            padding: "12px 16px",
            borderRadius: "6px",
            color: "white",
            minWidth: "200px",
            fontSize: "14px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        },
        success: {
            backgroundColor: "#4caf50",
        },
        error: {
            backgroundColor: "#f44336",
        },
        info: {
            backgroundColor: "#2196f3",
        },
    };

    return (
        <div style={{ padding: "40px" }}>
            <h2>Toast Notification Demo</h2>
            <button
                onClick={() => showToast("Success Message", "success")}
                style={{ marginRight: "10px" }}
            >
                Show Success
            </button>
            <button
                onClick={() => showToast("Error Occurred", "error")}
                style={{ marginRight: "10px" }}
            >
                Show Error
            </button>
            <button onClick={() => showToast("Info Message", "info")}>
                Show Info
            </button>

            <div style={toastStyles.container}>
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        style={{
                            ...toastStyles.toast,
                            ...toastStyles[toast.type],
                        }}
                    >
                        {toast.message}
                    </div>
                ))}
            </div>
        </div>
    );
}
