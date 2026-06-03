<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = [
            [
                '_id' => Str::uuid(),
                'category' => 'Technology',
                'title' => 'The Future of Artificial Intelligence',
                'description' => 'Explore how artificial intelligence is transforming industries, improving productivity, and shaping the future of work across the globe.',
                'image' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
            ],
            [
                '_id' => Str::uuid(),
                'category' => 'Travel',
                'title' => 'Top Destinations to Visit in 2026',
                'description' => 'Discover breathtaking destinations around the world, from hidden gems to famous landmarks that deserve a place on your travel bucket list.',
                'image' => 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
            ],
            [
                '_id' => Str::uuid(),
                'category' => 'Health & Fitness',
                'title' => 'Simple Habits for a Healthier Lifestyle',
                'description' => 'Learn practical daily habits that can help improve your physical health, mental well-being, and overall quality of life.',
                'image' => 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
            ],
            [
                '_id' => Str::uuid(),
                'category' => 'Business',
                'title' => 'Building a Successful Startup',
                'description' => 'Understand the key strategies entrepreneurs use to validate ideas, attract customers, and scale their startups successfully.',
                'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978',
            ],
            [
                '_id' => Str::uuid(),
                'category' => 'Programming',
                'title' => 'Mastering Laravel Development',
                'description' => 'A comprehensive guide to Laravel best practices, clean architecture, API development, and scalable web applications.',
                'image' => 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
            ],
            [
                '_id' => Str::uuid(),
                'category' => 'Technology',
                'title' => 'Cloud Computing Trends Every Developer Should Know',
                'description' => 'Cloud technologies continue to evolve rapidly. Learn about serverless computing, multi-cloud strategies, and the tools shaping modern application deployment.',
                'image' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
            ],
            [
                '_id' => Str::uuid(),
                'category' => 'Programming',
                'title' => 'Building Scalable REST APIs with Laravel',
                'description' => 'Discover best practices for creating maintainable and scalable REST APIs using Laravel, including authentication, validation, versioning, and caching techniques.',
                'image' => 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
            ],
            [
                '_id' => Str::uuid(),
                'category' => 'Artificial Intelligence',
                'title' => 'How Generative AI Is Changing Software Development',
                'description' => 'From code generation to automated testing, generative AI is transforming the way developers build applications and solve complex problems.',
                'image' => 'https://images.unsplash.com/photo-1677756119517-756a188d2d94',
            ],
            [
                '_id' => Str::uuid(),
                'category' => 'Productivity',
                'title' => 'Time Management Techniques for Remote Workers',
                'description' => 'Explore practical methods to improve focus, manage distractions, and maintain a healthy work-life balance while working remotely.',
                'image' => 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
            ],
            [
                '_id' => Str::uuid(),
                'category' => 'Cybersecurity',
                'title' => 'Essential Security Practices for Web Applications',
                'description' => 'Learn how to protect web applications against common vulnerabilities such as SQL injection, XSS, CSRF, and authentication attacks.',
                'image' => 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
            ],
        ];

        foreach ($posts as $post) {
            Post::create($post);
        }
    }
}
