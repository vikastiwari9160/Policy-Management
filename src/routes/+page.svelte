<!-- src/routes/+page.svelte -->
<script>
    import { goto } from '$app/navigation';
  </script>
  
  <main class="container mx-auto mt-10 text-center">
    <h1 class="text-3xl font-bold mb-6">Welcome to the Insurance Claims Platform</h1>
    <div class="space-x-4">
      <a href="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </a>
      <a href="/register" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Register
      </a>
    </div>
  </main>