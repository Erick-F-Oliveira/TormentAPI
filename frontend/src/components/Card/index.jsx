import React, { useState } from 'react';
import styles from './Card.module.css';
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
// Importa a biblioteca de destaque de sintaxe
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// Importa um estilo de sua preferência
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Card = ({ book }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader} onClick={toggleExpand}>
                <h3>{book.name}</h3>
                {isExpanded ? <FaCaretUp /> : <FaCaretDown />}
            </div>

            {isExpanded && (
                <div className={styles.expandedContent}>
                    {/* AQUI: Use o componente para destacar a sintaxe do JSON */}
                    <SyntaxHighlighter language="json" style={darcula}>
                        {JSON.stringify(book, null, 2)}
                    </SyntaxHighlighter>
                </div>
            )}

            {/*<div onClick={toggleExpand}>
                {isExpanded ? <FaCaretUp /> : <FaCaretDown />}
            </div>*/}
        </div>
    );
};

export default Card;