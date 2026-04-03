'use client'

import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { VehicleCard } from '@/components/shared/vehicle-card'
import { vehicles, makes, conditions, bodyTypes } from '@/data/vehicles'
import { LogoSplash } from '@/components/shared/logo-splash'
import { AutoLoopFrames } from '@/components/shared/auto-loop-frames'

export default function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMake, setSelectedMake] = useState('All')
  const [selectedCondition, setSelectedCondition] = useState('All')
  const [selectedBodyType, setSelectedBodyType] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const matchesSearch =
        searchQuery === '' ||
        vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.make?.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesMake = selectedMake === 'All' || vehicle.make === selectedMake
      const matchesCondition =
        selectedCondition === 'All' || vehicle.condition === selectedCondition
      const matchesBodyType =
        selectedBodyType === 'All' || vehicle.bodyType === selectedBodyType

      return matchesSearch && matchesMake && matchesCondition && matchesBodyType
    })
  }, [searchQuery, selectedMake, selectedCondition, selectedBodyType])

  const activeFilterCount = [selectedMake, selectedCondition, selectedBodyType].filter(
    (f) => f !== 'All'
  ).length

  const clearFilters = () => {
    setSelectedMake('All')
    setSelectedCondition('All')
    setSelectedBodyType('All')
    setSearchQuery('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <LogoSplash />

      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <AutoLoopFrames
          frameDir="/frames/scene1"
          totalFrames={169}
          fps={16}
          overlayOpacity={0.58}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none" aria-hidden="true" />

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
              Our Inventory
            </Badge>
            <h1 className="font-display text-h1 text-white mb-4">
              Browse Our <span className="text-gradient">Vehicles</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-body">
              Explore our full collection of quality Nigerian and foreign used vehicles. Use
              the filters to find your perfect car.
            </p>
          </div>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
              <label htmlFor="vehicle-search" className="sr-only">Search vehicles</label>
              <Input
                id="vehicle-search"
                type="search"
                placeholder="Search by make, model, or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-500 text-lg rounded-xl"
                autoComplete="off"
              />
              <Button
                variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white lg:hidden min-w-[44px] min-h-[44px]"
                onClick={() => setShowFilters(!showFilters)}
                aria-expanded={showFilters}
                aria-controls="filter-panel"
                aria-label={`${showFilters ? 'Hide' : 'Show'} filters${activeFilterCount > 0 ? ` (${activeFilterCount} active)` : ''}`}
              >
                <SlidersHorizontal className="w-5 h-5" aria-hidden="true" />
                {activeFilterCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div
            id="filter-panel"
            className={`max-w-4xl mx-auto mb-8 ${showFilters ? 'block' : 'hidden lg:block'}`}
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Make filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-400 text-sm self-center mr-1">Make:</span>
                {makes.map((make) => (
                  <button
                    key={make}
                    onClick={() => setSelectedMake(make)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-base min-h-[44px] ${
                      selectedMake === make
                        ? 'bg-primary text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {make}
                  </button>
                ))}
              </div>

              <div className="w-px h-8 bg-white/20 hidden md:block" aria-hidden="true" />

              {/* Condition filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-400 text-sm self-center mr-1">Condition:</span>
                {conditions.map((condition) => (
                  <button
                    key={condition}
                    onClick={() => setSelectedCondition(condition)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-base min-h-[44px] ${
                      selectedCondition === condition
                        ? 'bg-primary text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {condition}
                  </button>
                ))}
              </div>

              <div className="w-px h-8 bg-white/20 hidden md:block" aria-hidden="true" />

              {/* Body type filter */}
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-400 text-sm self-center mr-1">Type:</span>
                {bodyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedBodyType(type)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-base min-h-[44px] ${
                      selectedBodyType === type
                        ? 'bg-primary text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all min-h-[44px]"
                  aria-label="Clear all filters"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Results count */}
          <div className="text-center mb-8">
            <p className="text-gray-400 text-sm" role="status" aria-live="polite">
              Showing {filteredVehicles.length} of {vehicles.length} vehicles
            </p>
          </div>

          {/* Vehicle grid */}
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} checkAvailability={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-600" aria-hidden="true" />
              </div>
              <h3 className="font-display text-h3 text-white mb-2">No Vehicles Found</h3>
              <p className="text-gray-400 mb-6 text-body">
                No vehicles match your current filters. Try adjusting your search criteria.
              </p>
              <Button
                onClick={clearFilters}
                className="bg-primary hover:bg-primary-dark text-white"
              >
                Clear All Filters
              </Button>
              <p className="text-gray-500 text-sm mt-4">
                Or{' '}
                <a
                  href="https://wa.me/2348102487687?text=Hi%20Dabiri%20Autos!%20I'm%20looking%20for%20a%20specific%20vehicle.%20Can%20you%20help?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  contact us on WhatsApp
                </a>{' '}
                to ask about a specific vehicle.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
