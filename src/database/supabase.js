import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pmalufpioyddtdorsrbv.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtYWx1ZnBpb3lkZHRkb3JzcmJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU3OTY2MzAsImV4cCI6MjAwMTM3MjYzMH0.9KgcPC55UETUJEciXBO5C87kZ--jWtZ1voOQbLxndUA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
