import { Component } from '@angular/core';
import { MARKET_INTEL_DATA } from '../../data/market-intelligence.data';
import { MarketIntelItem } from '../../models/market-intel-item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-market-intelligence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-intelligence.component.html',
  styleUrls: ['./market-intelligence.component.scss'],
})
export class MarketIntelligenceComponent {
  title = 'Market Intelligence';
  items: MarketIntelItem[] = MARKET_INTEL_DATA;
}
