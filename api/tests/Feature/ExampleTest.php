<?php

namespace Tests\Feature;

use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic functional test for registeration.
     */
    public function test_making_an_api_registration(): void
    {
        $userData = [
            'name' => 'tester',
            'email' => 'tester@gmail.com',
            'password' => '123',
            'c_password' => '123',
        ];

        $response = $this->postJson('/api/register', $userData);

        $response
            ->assertStatus(200);
    }

    /**
     * A basic functional test for login.
     */
    // public function test_making_an_api_login(): void
    // {
    //     $userData = [
    //         'email' => 'tester@gmail.com',
    //         'password' => '123',
    //     ];

    //     $response = $this->postJson('/api/login', $userData);

    //     $response
    //         ->assertStatus(200);
    // }
}
