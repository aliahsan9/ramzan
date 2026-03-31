import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/* ✅ Strong typing (IMPORTANT) */
interface Skill {
  name: string;
  description: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  /* ✅ Selected filter */
  selectedCategory: string = 'All';

  /* ✅ Main skills data */
  skills: Skill[] = [
    { name: 'CV Writing', description: 'Professional CV creation', level: 95, category: 'Writing' },
    { name: 'Resume Design', description: 'Modern layouts & formatting', level: 90, category: 'Design' },
    { name: 'ATS Optimization', description: 'Pass ATS systems easily', level: 92, category: 'Technical' },
    { name: 'Content Writing', description: 'Strong, impactful content', level: 88, category: 'Writing' },
    { name: 'Keyword Optimization', description: 'SEO-based CV keywords', level: 85, category: 'Technical' },
    { name: 'Template Design', description: 'Custom CV templates', level: 87, category: 'Design' }
  ];

  /* ✅ Categories (auto-generated) */
  categories: string[] = [];

  /* ✅ Filtered skills (IMPORTANT FIX) */
  filteredSkills: Skill[] = [];

  constructor() {}

  ngOnInit(): void {
    /* Extract unique categories */
    this.categories = [...new Set(this.skills.map(skill => skill.category))];

    /* Show all skills initially */
    this.filteredSkills = [...this.skills];
  }

  /* ✅ Filter function */
  filterSkills(category: string): void {
    this.selectedCategory = category;

    if (category === 'All') {
      this.filteredSkills = [...this.skills];
    } else {
      this.filteredSkills = this.skills.filter(skill => skill.category === category);
    }
  }

}