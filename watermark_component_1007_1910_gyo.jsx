// 代码生成时间: 2025-10-07 19:10:42
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// 使用PropTypes进行类型检查
const Watermark = ({ text, fontSize, color, opacity }) => {
    const [watermarkText, setWatermarkText] = useState(''); // 状态管理，存储水印文本

    // 组件挂载后设置水印文本
    useEffect(() => {
        setWatermarkText(text);
    }, [text]);

    // 渲染水印组件
    const renderWatermark = () => {
        const canvas = document.createElement('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const ctx = canvas.getContext('2d');
        ctx.font = `${fontSize}px Arial`;
        ctx.fillStyle = color;
        ctx.globalAlpha = opacity;

        // 将文本绘制到canvas上
        const x = window.innerWidth / 2;
        const y = window.innerHeight / 2;
        ctx.fillText(watermarkText, x, y);

        // 将canvas转换为图片并返回
        return canvas.toDataURL('image/png');
    };

    return (
        <div>
            <img src={renderWatermark()} alt="Watermark" />
        </div>
    );
};

// 定义propTypes
Watermark.propTypes = {
    text: PropTypes.string.isRequired, // 水印文本
    fontSize: PropTypes.number, // 字体大小
    color: PropTypes.string, // 字体颜色
    opacity: PropTypes.number // 不透明度
};

// 设置默认props
Watermark.defaultProps = {
    fontSize: 20, // 默认字体大小
    color: 'rgba(255, 255, 255, 0.2)', // 默认字体颜色
    opacity: 0.2 // 默认不透明度
};

export default Watermark;
    