<script lang="ts">
	import type { CreateCompletionResponse } from 'openai'
	import { SSE } from 'sse.js'

	let context = ''
	let loading = false
	let error = false
	let answer = ''

	const handleSubmit = async () => {
		loading = true
		error = false
		answer = ''

		const eventSource = new SSE('/api/explain', {
			headers: {
				'Content-Type': 'application/json'
			},
			payload: JSON.stringify({ context })
		})

		context = ''

		eventSource.addEventListener('error', (e) => {
		//	error = true
		//	loading = false
		//	alert('Something went wrong!')
		})

		eventSource.addEventListener('message', (e) => {
			try {
				loading = false

				if (e.data === '[DONE]') {
					return
				}

				const completionResponse: CreateCompletionResponse = JSON.parse(e.data)

				const [{ text }] = completionResponse.choices

				answer = (answer ?? '') + text
			} catch (err) {
			//	error = true
			//	loading = false
			//	console.error(err)
			//	alert('Something went wrong!')
			}
		})

		eventSource.stream()
	}
</script>

<h1>Give two contrasting takes</h1>
<form on:submit|preventDefault={() => handleSubmit()}>
	<label for="context">Enter text to generate contrasting takes (if rate limit is exceeded for OpenAI API, generate button may not work)</label>
	<textarea name="context" rows="5" bind:value={context} />
	<button>Explain it</button>
	<div class="pt-4">
		<h2>Explanation:</h2>
		{#if answer}
			<p>{answer}</p>
		{/if}
	</div>
</form>
