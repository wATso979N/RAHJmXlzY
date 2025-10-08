// 代码生成时间: 2025-10-08 19:10:49
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 使用TypeScript时可以定义接口来替代PropTypes
// interface BiometricAuthProps {
//     onSuccess: () => void;
//     onFailure: () => void;
// }

const BiometricAuthComponent = ({ onSuccess, onFailure }) => {
    // State管理
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    // 模拟生物识别验证
    const authenticate = async () => {
        setIsAuthenticating(true);
        // 这里实际开发中可以是调用生物识别API
        try {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.2) {
                        resolve();
                    } else {
                        reject();
                    }
                }, 2000);
            });
            setIsAuthenticated(true);
            onSuccess();
        } catch (error) {
            onFailure();
        } finally {
            setIsAuthenticating(false);
        }
    };

    return (
        <div>
            {isAuthenticating ? (
                <p>Authenticating...</p>
            ) : (
                <button onClick={authenticate} disabled={isAuthenticated}>
                    {isAuthenticated ? 'Authenticated' : 'Authenticate'}
                </button>
            )}
        </div>
    );
};

BiometricAuthComponent.propTypes = {
    onSuccess: PropTypes.func.isRequired,
    onFailure: PropTypes.func.isRequired,
};

export default BiometricAuthComponent;
