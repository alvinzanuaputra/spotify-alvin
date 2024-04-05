/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const nextConfig = {
  ...withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
  }),
  images: {
    domains: ["misc.scdn.co", "i.scdn.co", "geo-media.beatsource.com", "i1.sndcdn.com", "media.pitchfork.com", "seed-mix-image.spotifycdn.com", "tbvswgcbrilqlaxdsxii.supabase.co","brvhtnpddqhvrqeevwsy.supabase.co"]
  }
}

module.exports = nextConfig
