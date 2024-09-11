import React from 'react'
import { useParams } from 'react-router';

export default function Wiki() {
    const { keyword } = useParams()

    return (
        <h2>{keyword}</h2>
    )
}
