import React, { useState } from 'react';
import data from './requirementsData.json';

function Requirements() {
    const TreeNode = ({ node }) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleNode = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div className="tree-node-container" style={{ marginLeft: '20px' }}>
                <div
                    className={`tree-node ${node.children && node.children.length > 0 ? 'has-children' : ''} ${isOpen ? 'open' : ''}`}
                    onClick={toggleNode}
                    style={node.children && node.children.length > 0 ? { cursor: 'pointer' } : { cursor: 'default' }}
                >
                    {node.children && node.children.length > 0 && (
                        <span className={`caret ${isOpen ? 'open' : ''}`}>
                            {isOpen ? '▼' : '➤'}
                        </span>
                    )}
                    <span>{node.label}</span>
                </div>
                {isOpen && node.children && node.children.length > 0 && (
                    <div>
                        {node.children.map((childNode, index) => (
                            <TreeNode key={index} node={childNode} />
                        ))}
                    </div>
                )}
            </div>
        );
    };

    const TreeView = ({ data }) => {
        return (
            <div>
                {data.map((node, index) => (
                    <TreeNode key={index} node={node} />
                ))}
            </div>
        );
    };

    return (
        <div id="requirementsContainer">
            <h1>My Requirements</h1>
            <TreeView data={data} />
        </div>
    );
}

export default Requirements;
