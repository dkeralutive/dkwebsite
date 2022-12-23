import React from 'react'

const Error = () => {
    const styles = {
        textAlign: "center",
        fontSize: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        color: "black"
    }
    return (
        <div style={styles} ><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style={{ fill: "rgba(249, 13, 13, 1)", transform: "", msFilter: "" }}><path d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" /></svg>This page does not exist</div>
    )
}

export default Error