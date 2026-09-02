const API_URL = import.meta.env.VITE_API_URL

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json()
}

export async function getTasks() {
  const response = await fetch(`${API_URL}/api/tasks`)
  return handleResponse(response)
}

export async function createTask(taskData) {
  const response = await fetch(`${API_URL}/api/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  })

  return handleResponse(response)
}

export async function updateTask(taskId, taskData) {
  const response = await fetch(`${API_URL}/api/tasks/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  })

  return handleResponse(response)
}

export async function deleteTask(taskId) {
  const response = await fetch(`${API_URL}/api/tasks/${taskId}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }
}